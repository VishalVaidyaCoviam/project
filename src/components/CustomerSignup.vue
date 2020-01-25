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
        <input v-model="pass2" type="password" placeholder="Enter Password" name="psw" required />
        <!-- <input type="file" name="" id=""> -->
        <!-- <VueBase64FileUpload
          class="v1"
          accept="image/png, image/jpeg"
          image-class="v1-image"
          input-class="v1-input"
          :max-size="customImageMaxSize"
          @size-exceeded="onSizeExceeded"
          @file="onFile"
          @load="onLoad"
        />
        <div class="vue-base64-file-upload">
          <img v-show="previewImage && !disablePreview" :src="previewImage" :class="imageClass" />
          <div class="vue-base64-file-upload-wrapper" :style="wrapperStyles">
            <input type="file" @change="onChange" :style="fileInputStyles" :accept="accept" />
            <input
              type="text"
              :class="inputClass"
              :style="textInputStyles"
              :value="fileName || file && file.name"
              :placeholder="placeholder"
              disabled
            />
          </div>
        </div> -->
        <label for="">Upload Profile Picture</label>
        <input type="file" name="" id="" @change="fileUpload">
        <button type="button" @click="signup">Sing Up</button>
      </div>
    </form>
  </div>
</template>
<script>
import ProfilePic from "../image/user.svg";
// import VueBase64FileUpload from "vue-base64-file-upload";

export default {
  name: "CustomerSignup",
  data: function() {
    return {
      profilePic: ProfilePic,
      type: 0,
      pass1: "",
      pass2: "",
      email: "",
      Uname: "",
      Baseimage: null
    };
  },
  methods: {
    signup() {
      // window.console.log(this.pass1+" "+this.pass2+" "+this.email+" "+this.Uname+" ");
      window.console.log(this.Baseimage);
      var reader = new FileReader();
      let path = "";
      
      reader.onloadend = function () {
    // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
    var b64 = reader.result;
    this.Baseimage = b64;
    reader.readAsDataURL(this.Baseimage);
    // .replace(/^data:.+;base64,/, '');
    window.console.log(this.Baseimage); //-> "R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs="
  };
  this.Baseimage = path;
  window.console.log(this.Baseimage);
    },
    fileUpload(e){
      window.console.log(e.target.files[0]);
      this.Baseimage = e.target.files[0];
      // window.console.log(reader)
    }
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
  }
};
</script>
<style scoped>
.frm {
  height: 600px;
}
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