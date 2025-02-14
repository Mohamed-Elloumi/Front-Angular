import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor (private MS:MemberService,private router:Router){

  }
  form!:FormGroup
  ngOnInit() {
  this.form = new FormGroup({
    cin: new FormControl(null),
    name: new FormControl(null),
    type: new FormControl(null),
    createdDate: new FormControl(null),
  });


}  onSubmit():void{
  console.log(this.form.value);
this.MS.addMember(this.form.value).subscribe(()=>{
  //redirection vers le path vide 
  this.router.navigate([''])
}
  )
}
}