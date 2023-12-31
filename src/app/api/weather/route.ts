import { NextRequest, NextResponse } from "next/server"

export async function GET(request: any) {
    const { searchParams } = new URL(request.url)
    const address = searchParams.get('address')

    let url = ''
    if (address) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${process.env.API_KEY}&units=imperial`
    } 

    const res = await fetch(url)
    const data = await res.json()
    return NextResponse.json({ data })
}