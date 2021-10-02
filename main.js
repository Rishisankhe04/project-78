var images=["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names=["Family Book","Ranbir Singh","Diljeet Singh","Rocky Singh","Alia Singh","Soni Singh"];
var i=0;
function update(){
    var member_in_array=5;
    if(i=0) i<member_in_array; i++; {
      var updatedImage=images[i];
      var updatedName=names[i];
        document.getElementById("family_image").src=updatedImage;
        document.getElementById("family_name").innerHTML=updatedName;
      }

}