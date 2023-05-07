import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase_client: SupabaseClient;

  constructor() {
    this.supabase_client = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }

  //Register
  signUp(email: string, password: string): Promise<any> {
    return this.supabase_client.auth.signUp({
      email,
      password,
    });
  }

  //Login

  signIn(email: string, password: string): Promise<any> {
    return this.supabase_client.auth.signInWithPassword({
      email,
      password,
    });
  }

  //SignOut
  public signOut(): Promise<any> {
    return this.supabase_client.auth.signOut();
  }

  // //get user status
  // getStatus() {
  //   return this.supabase_client.auth.getSession().then((res) => {
  //     console.log('res');
  //     return res;
  //   });
  // }
}
