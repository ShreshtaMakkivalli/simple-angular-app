import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[FormsModule],
  
  
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    
    

  }

  onSubmit() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      
    }
    const requestOptions = {
      headers: new Headers(headerDict),
    };
    this.loginService.getUsers(requestOptions).subscribe((users:any)=>{
      console.log(users)
    },(error)=>{
      console.log("not found");
    });
    
    
    if (this.username === 'admin' && this.password === 'admin') {
      window.alert('Login successful!');
    } else {
      window.alert('Invalid credentials');
    }
  }
  
}
