import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '../../../../../lib/db'; // Asumsikan Anda telah membuat lib/db.ts
import { RowDataPacket } from 'mysql2/promise';

// Handler untuk metode POST
export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: 'Username dan password wajib diisi.' },
        { status: 400 } // Bad Request
      );
    }

    // 1. Cari Pengguna di Database
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT user_id, password_hash, role FROM users WHERE username = ? OR email = ?',
      [username, username]
    );

    const user = rows[0];

    if (!user) {
      // Mengirim pesan yang tidak terlalu spesifik untuk keamanan
      return NextResponse.json(
        { message: 'Username atau password tidak valid.' },
        { status: 401 } // Unauthorized
      );
    }

    // 2. Verifikasi Password (menggunakan bcrypt)
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      // Mengirim pesan yang tidak terlalu spesifik untuk keamanan
      return NextResponse.json(
        { message: 'Username atau password tidak valid.' },
        { status: 401 } // Unauthorized
      );
    }

    // --- SUCCESS ---
    
    // Nanti, di sini Anda akan membuat dan mengembalikan Token JWT
    
    return NextResponse.json(
      { 
        message: 'Login Berhasil!',
        user: { 
          id: user.user_id,
          role: user.role
        } 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error selama proses login:', error);
    // Jika terjadi error server (misalnya koneksi database), kirim error 500
    return NextResponse.json(
      { message: 'Terjadi kesalahan internal server.' },
      { status: 500 }
    );
  }
}