
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { Observable } from "rxjs";
import { UserDTO } from "./userDTO";

@Injectable()
export class AuthService{
    url = 'https://localhost:5001/api/Auth/login'
    token: any;
    constructor(private http: HttpClient){}

    login(email: string, password: string): string | null
    {
        let DTO = new UserDTO(email,password)
        this.http.post(this.url, DTO,{responseType: 'text'}).subscribe((resp: any) =>
        {
            localStorage.setItem('auth_token', resp); 
        });
        return localStorage.getItem('auth_token');
    }
}