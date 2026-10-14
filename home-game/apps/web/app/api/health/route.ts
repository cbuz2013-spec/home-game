import {NextResponse} from 'next/server';
export function GET(){return NextResponse.json({service:'home-game',phase:1,status:'preview',auth_ready:false,db_ready:false,release_approved:false})}
