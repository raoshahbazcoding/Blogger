import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
// import BlogModel from "@/models/BlogModel"; // Uncomment and adjust as needed



// Ensure DB connection
const LoadDB = async () => {
  await ConnectDB();
};
LoadDB(); // Connect to DB once on server start

export async function GET(request) {
  return NextResponse.json({ msg: "API WORKING" });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");

    // Validate image
    if (!image || typeof image === "string") {
      return NextResponse.json({ error: "Invalid image file" }, { status: 400 });
    }

    // Save image to /public
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const fileName = `${timestamp}_${image.name}`;
    const path = `./public/${fileName}`;

    await writeFile(path, buffer);
    const imgUrl = `/${fileName}`;
    console.log("Image saved:", imgUrl);

    //  BlogModel for save THis In database
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };
    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, imgUrl });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}

