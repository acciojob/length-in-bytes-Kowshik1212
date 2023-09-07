const byteSize = (str) => {
	const blob=new Blob([str],{
		type:'text'
	})
	return blob.size;
  // write your code here
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
