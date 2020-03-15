<template>
  <div class="al-cn">
    <h2>Login Form</h2>

    <form method="post" class="frm">
      <div class="imgcontainer">
        <img :src="profilePic" class="img_user" />
      </div>

      <div class="container">
        <label for="uname">
          <b>Username</b>
        </label>
        <input v-model="email" type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input v-model="pass" type="password" placeholder="Enter Password" name="psw" required />
        <div style="margin-top:10px;">
        <!-- <label style="float:left;">Type:</label> -->
        <label class="radio">
          <input v-model="type" type="radio" name="options" v-bind:value="0" />
          <span>Customer</span>
        </label>
        <label class="radio">
          <input v-model="type" type="radio" name="options" v-bind:value="1"/>
          <span>Merchant</span>
        </label>
        </div>
        <button type="button" @click="login">Login</button>
        <hr style="margin-top:5px;margin-bottom:5px">
        <img :src="gmail" alt="" class="gmail" @click="GmailLogin">
        <img :src="facebook" alt="" class="facebook" @click="FacebookLogin">
      </div>
    </form>
  </div>
</template>
<script>
import ProfilePic from "../image/user.svg";
import Gmail from "../image/gmail.svg";
import Facebook from "../image/facebook.svg";
export default {
  name: 'login',
  data: function() {
    return {
      profilePic: ProfilePic,
      type: 0,
      pass: "",
      email: "",
      gmail: Gmail,
      facebook : Facebook,
    //   loginObj: {
    //       pass : "",
    //       email : "",
    //       type : ""
    //   }
    };
  },
  methods: {
    login() {
        window.console.log(this.email);
        window.console.log(this.pass);
        window.console.log(this.type);
        if(localStorage.getItem('guestToken') != null)
        {
           let loginObj = {
            "userEmail":this.email,
            "userPassword":this.pass,
            "userRole":this.type,
            "type": "web",
            "guestToken":localStorage.getItem('guestToken')
        }
        this.$store.dispatch('login',loginObj);

        this.$router.push({path: `/popular`});
        }
        else
        {
          let loginObj = {
            "userEmail":this.email,
            "userPassword":this.pass,
            "userRole":this.type,
            "type": "web"
          }
          this.$store.dispatch('login',loginObj);
        this.$router.push({path: `/popular`});
        }
        // window.console.log(loginObj);
        // this.loginObj.email = this.email;
        // this.loginObj.pass = this.pass;
        // this.loginObj.type = this.type;
    },
    changeRadio() {

    },
    GmailLogin(){
        this.$store.dispatch('GoogleLogin',this.type);  
        this.$router.push({path: '/popular'})
    },
    FacebookLogin(){
      this.$store.dispatch('FacebookLogin',this.type);
      this.$router.push({path: '/popular'})
    }
  },
  mounted(){
    if(localStorage.getItem('jwtToken') || localStorage.getItem('userAccessToken'))
      this.$router.push({path: '/popular'})
  }
};
</script>
<style scoped>
.gmail {
    /* float: left; */
    margin-right: 100px;
    height: 45px;
}
.facebook {
    /* float: right; */
    margin-left: 10px;
    height: 45px;
}
.al-cn {
  /* align-content: center; */
  text-align: -webkit-center;
}
.frm {
  width: 50%;
}
.img_user {
  height: 100px;
}
.flex-container {
  display: flex;
}
.flex-1 {
  flex: 1 0 auto;
}
.flex-2 {
  flex: 1 0 auto;
}
form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #2196f3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #0b7dda;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

.container {
  padding: 16px;
  height: 280px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

label.radio {
  margin-right: 20px;
}
/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>