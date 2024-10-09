import dbConnect from "@/libs/mongodb";
import Admin from "@/schema/adminSchema";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { nama, jabatan, username, password } = await req.json();

  await dbConnect();

  // username sudah ada
  const existingUser = await Admin.findOne({ username });
  if (existingUser) {
    return new Response(
      JSON.stringify({ message: "Username sudah digunakan." }),
      { status: 400 }
    );
  }

  // Enkripsi password
  const hashedPassword = bcrypt.hashSync(password, 10);

  const admin = new Admin({
    nama,
    jabatan,
    username,
    password: hashedPassword,
  });

  try {
    await admin.save();
    return new Response(JSON.stringify({ message: "Pendaftaran berhasil." }), {
      status: 201,
    });
  } catch {
    return new Response(
      JSON.stringify({ message: "Terjadi kesalahan saat menyimpan data." }),
      { status: 500 }
    );
  }
}
