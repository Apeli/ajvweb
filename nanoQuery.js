var nq = {

	elem : function(id){
		return getElementById(id);
	}
	, e : function(id)
	{
		//Shortcut
		return this.elem(id); 
	}
};