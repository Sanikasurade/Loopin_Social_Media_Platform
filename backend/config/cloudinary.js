import  {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
const uploadOnCloudinary=async(file)=>{
  try{
      cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,

});
const result=await cloudinary.uploader /*responsible (cloudinary.uploader.upload)for uploading the file*/
.upload(file,{
    resource_type:'auto'    /*set to auto mean sit can upload video or images*/
})
fs.unlinksync(file)
return result.secure_url
  }catch(error){
console.log(error)
fs.unlinksync(file)
  }

}
export default uploadOnCloudinary