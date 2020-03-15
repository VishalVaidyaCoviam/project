<template>
  <div class="al-cn">
    <h2>Customer Signup</h2>
    <form method="post" class="frm">
      <div class="imgcontainer">
        <img :src="profilePic" class="img_user" />
      </div>

      <div class="container">
        <label for="uname">
          <b>User Name</b>
        </label>
        <input v-model="Uname" type="text" placeholder="Enter Username" name="uname" required />
        <label for="uname">
          <b>Email</b>
        </label>
        <input v-model="email" type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input v-model="pass1" type="password" placeholder="Enter Password" name="psw" required />
        <label for="psw">
          <b>Password</b>
        </label>
        <br>
        <input v-model="pass2" type="password" placeholder="Enter Password" name="psw" required />
        <br>
        <label for="mob">
          <b>Mobille</b>
        </label>
        <input v-model="mobile" type="text" placeholder="Enter Mobile Number" name="mob" required />
        <br>
        Address
        <br>
        <textarea v-model="address" style="width:100%;" rows="5"></textarea>
        <!-- <input v-model="pass2" type="password" placeholder="Enter Password" name="psw" required /> -->
        <!-- <label for="">Upload Profile Picture</label>
        <input type="file" name="" id="" @change="fileUpload"> -->
        <button type="button" @click="checkForm()">Sign Up</button>
        <p v-if="errors.length" style="color:red;">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key='error.id' >{{ error }}</li>
            </ul>
         </p>
      </div>
    </form>
  </div>
</template>
<script>
import ProfilePic from "../image/user.svg";
// import VueBase64FileUpload from "vue-base64-file-upload";
// var img64 = '';
export default {
  name: "CustomerSignup",
  data: function() {
    return {
      profilePic: ProfilePic,
      type: 0,
      pass1: null,
      pass2: null,
      email: null,
      Uname: null,
      Baseimage: {},
      image64: '',
      mobile: null,
      address:null,
      errors:[]
      
    };
  },
  methods: {
    checkForm: function (e) {
          this.errors=[]
            if(this.mobile)
            {
              window.console.log(this.mobile.length)
                if(this.mobile.length !== 10)
                {
                    this.errors.push('Number should be 10 digits')
                }
            }
            if(this.email){
                if(!this.validEmail(this.email))
                {
                    this.errors.push('Email invalid')
                }
            }
            if (!this.Uname) {
                    this.errors.push('Name required.');
                }
            if (!this.mobile) {
                    this.errors.push('Mobile required.');
                }
            if (!this.email) {
                    this.errors.push('Email required.');
                }
            if (!this.pass1 ){
                    this.errors.push('Password one required.');
                }
            if (!this.pass2) {
                    this.errors.push('Password two required.');
              }
            if (!this.address) {
                    this.errors.push('Address required.');
                }
            if(!this.errors.length)
            {
                this.signup()
            }
            if(this.pass1 !== this.pass2) {
              this.errors.push('Passwords does not match')
            }
            e.preventDefault();
        },
        validEmail: function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // {1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            },
    signup() {
      window.console.log("Sign Up");
      var SignupObj = {
            "customerEmail":this.email,
            "password":this.pass1,
            "customerMobileNo":this.mobile,
            "customerAge":"18",
            "customerAddress":this.address
        }
        window.console.log(SignupObj);
        this.$store.dispatch('SignUpCustomer',{
          Obj: SignupObj,
          success: this.success,
          fail: this.fail
          })
        
      // window.console.log(this.pass1+" "+this.pass2+" "+this.email+" "+this.Uname+" ");
      // window.console.log(this.Baseimage);
    // window.console.log('we in sighnhhyhjhbjhb',img64);
  // this.Baseimage = path;
  // window.console.log(this.Baseimage);
    }
  //   ,
  //   fileUpload(e){
  //     window.console.log(e.target.files[0]);
  //     this.Baseimage = e.target.files[0];
  //       var reader = new FileReader();
  //     // let path = "";
  //   reader.readAsDataURL(this.Baseimage);  
  //     reader.onloadend = function () {
  //   // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
  //   var b64 = reader.result;

  //   img64 = b64;
  //   window.console.log("image 64 ",img64);
  //   // .replace(/^data:.+;base64,/, '');
  //   window.console.log(b64); //-> "R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs="
  // };
  //     // window.console.log(reader)
  //   }
    // },
    // onFile(file) {
    //   window.console.log(file); // file object
    // },
    // onLoad(dataUri) {
    //   window.console.log(dataUri); // data-uri string
    // },
    // onSizeExceeded(size) {
    //   alert(
    //     `Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`
    //   );
    // }
  },
  components: {
    // VueBase64FileUpload
  },
  mounted(){
    if(localStorage.getItem('userAccessToken'))
      this.$router.push({name:'merchanthome'})
  }
};
</script>
<style scoped>
/* .frm { */
  /* height: 700px; */
/* } */
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
  /* height: 280px; */
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