const fs = require("fs");

const space_project_path = "./space_project";
const log_txt_path = "./space_project/log.txt";
const update_txt_path = "./space_project/update.txt";

// que-1
// fs.mkdirSync(space_project_path);

// fs.mkdir(space_project_path);
// fs.mkdir(space_project_path,(err)=>{
//   if(err) throw err;
//   console.log(`folder created at ${space_project_path}`);
// })

// que-2
// const data2 = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."; 
// fs.writeFileSync(log_txt_path,data2);

// fs.writeFile(log_txt_path,data2,(err)=>{
//   if(err) throw err;
//   console.log(`create file at ${log_txt_path} with data - ${data2}`);
// });

// que-3
// const data3 = "ISRO has started working on Gaganyaan.";
// fs.writeFileSync(log_txt_path, data3);

// fs.writeFile(log_txt_path, data3,(err)=>{
//   if(err) throw err;
//   console.log(`override this file ${log_txt_path} with ${data3}`);
// });

//que-4
// const data4 = "The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
// fs.appendFileSync(log_txt_path, data4);

// fs.appendFile(log_txt_path, data4,(err)=>{
//   if(err) throw err;
//   console.log(`appended ${log_txt_path} with data - ${data4}`);
// });

//que-5
// fs.renameSync(log_txt_path,update_txt_path);

// fs.rename(log_txt_path,update_txt_path,(err)=>{
//   if(err) throw err;
//   console.log(`Rename ${log_txt_path} to ${update_txt_path}`);
// });

//que-6
// const data6 = fs.readFileSync(update_txt_path);

// console.log(data6.toString());
// fs.readFile(update_txt_path,(err, data)=>{
//   console.log(`Data in ${update_txt_path} is => ${data.toString()}`);
//   console.log("We are excited");
// });

//que-7
// fs.unlinkSync(update_txt_path);

// fs.unlink(update_txt_path, (err)=>{
//   if(err) throw err;
//   console.log(`Deleted ${update_txt_path}`);
// });

//que-8
// fs.rmdirSync(space_project_path);

// fs.rmdir(space_project_path,(err)=>{
//   if(err) throw err;
//   console.log(`Deleted ${space_project_path}`);
// });