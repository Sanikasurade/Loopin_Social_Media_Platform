import  {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
const uploadOnCloudinary=async(file)=>{
  try{
      cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,

});

/*responsible (cloudinary.uploader.upload)for uploading the file*/
const result=await cloudinary.uploader
.upload(file,{
    resource_type:'auto'    /*set to auto mean sit can upload video or images*/
})

// Delete local file after successful upload
fs.unlinkSync(file)

return result.secure_url

  }catch(error){
console.log(error)
// Try deleting file if it exists
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }

    throw error; // rethrow so caller knows it failed
  }

}
export default uploadOnCloudinary