import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) { 

  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from todo

  const user = await prisma.user.create({
    data: {
      email: 'test1@google.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin','client','super-user'],
      todos: {
        create: [
          { description: 'Space stone', complete: true },
          { description: 'Mind stone' },
          { description: 'Reality stone' },
          { description: 'Power stone' },
          { description: 'Time stone' },
        ]
      }
    }
  });
  return NextResponse.json({ message: 'Seed Executed' });
}