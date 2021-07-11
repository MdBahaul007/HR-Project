import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';//for routing to diffrent place on succesfull login.
import { AlertController, LoadingController } from '@ionic/angular'; //to rise alert of something went wrong on login like wrong passwpord or mail
import { async } from 'q';
import { LoginSignupServiceService } from '../../login-signup-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  credentialForm: any= FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private alertController: AlertController,private LoginSignupServiceService: LoginSignupServiceService,private loadingController: LoadingController) { }

  ngOnInit() {
    this.credentialForm= this.formBuilder.group({
      email:['',[Validators.required]], //TO VALIDATE EMAIL
      password:['',[Validators.required,Validators.minLength(6)]] //IT WILL NOT VALIDATE TILL PASSWORD OF 6 LENGTH.
    });
  }
  async signUp(){
    //to do behid the scenes thing like loading the data than after successfull valiation routinng user to diffrent page it will only show loading circle
    const loading= await this.loadingController.create();
    await loading.present(); //this will wait till promise is returned.

    //now passing the inputed form value(email,password) to signUp function.

    this.LoginSignupServiceService.signUp(this.credentialForm.value).then(async user =>{
      console.log(user);
      loading.dismiss();
      this.router.navigateByUrl('/login-screen',{replaceUrl:true}); // this make sure that URL is completly replaced with new URL
    },async (err)=>{  //if error occur due to some reasons
      loading.dismiss();
      const alert=await this.alertController.create({
        header:'SignUp failed',
        message: 'Email or Password format is incorrect!!',
        buttons: ['OK'],
      });
      await alert.present();

    });

  }


}
