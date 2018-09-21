import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-indian-map';
   /**@[]
   *[0] => state name
   *[1] => state Code
   *[2] => state value 
  */
 states = [["Andaman and Nicobar Islands","IN-AN",0],["Andhra Pradesh","IN-AP",8007],["Arunachal Pradesh","IN-AR",0],["Assam","IN-AS",183],["Bihar","IN-BR",976],["Chandigarh","IN-CH",382],["Chhattisgarh","IN-CT",102],["Daman and Diu","IN-DD",0],["Delhi","IN-DL",0],["Dadra and Nagar Haveli","IN-DN",1138],["Goa","IN-GA",9],["Gujarat","IN-GJ",1080],["Himachal Pradesh","IN-HP",709],["Haryana","IN-HR",156],["Jharkhand","IN-JH",37],["Jammu And Kashmir","IN-JK",876],["Karnataka","IN-KA",1073],["Kerala","IN-KL",2941],["Lakshadweep","IN-LD",0],["Maharashtra","IN-MH",1108],["Meghalaya","IN-ML",4335],["Manipur","IN-MN",1],["Madhya Pradesh","IN-MP",2],["Mizoram","IN-MZ",0],["Nagaland","IN-NL",0],["Odisha","IN-OR",1252],["Punjab","IN-PB",0],["Puducherry","IN-PY",1845],["Rajasthan","IN-RJ",564],["Sikkim","IN-SK",2],["Telangana","IN-TG",6974],["Tamil Nadu","IN-TN",2336],["Tripura","IN-TR",1],["Uttar Pradesh","IN-UP",3581],["Uttarakhand","IN-UT",710],["West Bengal","IN-WB",1929]];
 
 selectedObject(val){
console.log(val);
 }
}
