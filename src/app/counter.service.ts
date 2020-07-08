import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor(private usersService: UsersService) {
    usersService.changedUsers.subscribe(()=>alert(`Now has active users: ${this.usersService.activeUsers.length}, inactive users: ${this.usersService.inactiveUsers.length}`))
   }
}
