import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { nextTick } from 'q';

const SERVER_URL = 'http://localhost:3000/chat';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() { }

  initSocket(): void {
    this.socket = io(SERVER_URL);
  }

  joinRoom(selroom): void{
    this.socket.emit("joinRoom", selroom);
  }

  leaveRoom(selroom): void{
    this.socket.emit("leaveRoom", selroom);
  }

  joined(next){
    this.socket.on("joined", res=>next(res));
  }

  createRoom(newroom){
    this.socket.emit("newroom", newroom);
  }

  reqnumusers(selroom){
    this.socket.emit("numusers", selroom);
  }

  getnumusers(next){
    this.socket.on("numusers", res=>next(res));
  }

  reqroomList(){
    this.socket.emit("roomlist", "list please");
  }

  getroomList(next){
    this.socket.on("roomlist", res=>next(res));
  }

  notice(next){
    this.socket.on("notice", res=>next(res));
  }

  sendMessage(message: string): void{
    this.socket.emit("message", message);
  }

  getMessage(next){
    this.socket.on("message", (message)=>next(message));
  }
}