//your JS code here. If required.
unction secondHighest(arr) {
			//Write your code here
			let heighest=0;
			let secondHigh=0;
			if(arr.length==0){
				return -1;
			}
			for(let i=0;i<arr.length;i++){
				if(arr[i]>heighest){
					secondHigh=heighest;
					heighest=arr[i];
				}
				else if(arr[i]>secondHigh){
					secondHigh=arr[i];
				}
			} 
			return secondHigh;
			
			
			
		}

		function Main() {
			//var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();