import { NextResponse } from 'next/server';

const PASSWORD = 'antennagroup';
const AUTH_COOKIE = 'sepa-preview-auth';
const AUTH_VALUE = 'antennagroup-verified';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const code = typeof body?.code === 'string' ? body.code.trim().toLowerCase() : '';

    if (code !== PASSWORD) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: AUTH_COOKIE,
      value: AUTH_VALUE,
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 14, // 2 weeks
    });
    return response;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
