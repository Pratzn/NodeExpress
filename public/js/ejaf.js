ejaf =function(){};
(function()
{
  ejaf = this;
  function defined(x)
  {
    return typeof x != 'undefined';
  }
  this.ready = false;
  this.init = function()
  {
    console.log('Client-JS initialize...');
	$.blockUI({message:'<img src=img/loadingz.gif />', css: { 
            top:  ($(window).height() - 400) /2 + 'px', 
            left: ($(window).width() - 400) /2 + 'px', 
            width: '400px' 
        } });
    setTimeout($.unblockUI, 3000); 
	this.ready = true;
  };
  this.doSomething = function()
  {
  };
  var options = {
      x : 123,
      y : 'abc'
      };
  this.define = function(key, value)
  {
    if(defined(options[key]))
    {
      options[key] = value;
    }
  };
}).apply(ejaf);


