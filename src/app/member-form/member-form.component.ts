import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor (private MS:MemberService,private router:Router,private activatedRoute:ActivatedRoute) {

  }
  form!:FormGroup
  ngOnInit() {
    //1-recupere la route active
    const idCourant=this.activatedRoute.snapshot.params['id'];
    console.log(idCourant);
    if (idCourant) {
      this.MS.getMemberById(idCourant).subscribe(
        (data)=>{
          this.form = new FormGroup({
            cin: new FormControl(data.cin),
            name: new FormControl(data.name),
            type: new FormControl(data.type),
            createdDate: new FormControl(data.createdDate),
          });
        }
      );
    } else {
      this.form = new FormGroup({
        cin: new FormControl(null),
        name: new FormControl(null),
        type: new FormControl(null),
        createdDate: new FormControl(null),
      });
    }
  }

  onSubmit(){
    const idCourant=this.activatedRoute.snapshot.params['id'];
    if (idCourant) {
      this.MS.updateMember(idCourant,this.form.value).subscribe(() => {
        //redirection vers le path vide 
        this.router.navigate(['']);
      });
    } else {

    console.log(this.form.value);
    this.MS.addMember(this.form.value).subscribe(() => {
      //redirection vers le path vide 
      this.router.navigate(['']);
    });
  }
}
}