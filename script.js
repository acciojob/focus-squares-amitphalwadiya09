function changecolor(activecolor) {
	let square=document.querySelectorAll('.square');

	for(let i=0;i<square.length;i++)
		{
			if(i+1!==activecolor)
			{
				squares[i].style.backgroundColor = '#6F4E37';
			}
			else
			{
				squares[i].style.backgroundColor = '#E6E6FA';
			}
		}
}