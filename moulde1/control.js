;(function($,_,Backbone){
	var Man = Backbone.Model.extend({
		url:'sever/1.php',
		initialize:function(){
			//alert('man is created');
			this.bind('change:name',this.change_value);
			this.bind('invalid',function(models,errors){
				
				console.log(models)
			})
		},
		defaults:{
			name:'wu',
			age:25
		},
		validate:function(attributes){
             if(attributes.name == "")return 'not empty'
		},
        change_value:function(){
        	console.log('old name:'+this.defaults.name+'---change name:'+this.get('name'))
        }
	})
	var man = new Man;
	// man.set({name:'na'})
    man.set({name:'aa'});
     // man.save({
     // 	success:function(model,responest){
     //         console.log('responest')
     // 	}
     // })
     man.fetch({
         success:function(model,responest){
             console.log('responest')
     	}
     })
     var Team = Backbone.Collection.extend({
     	model:Man
     })
     var person1 = new Man({name:'tom'});
     var person2 = new Man({name:'lucky'});
     var person3 = new Man({name:'jack'});
     var team = new Team([person1,person2,person3]);
     team.remove(person3);
     team.add(person3);
     team.each(function(pars){
         console.log(pars.get('name'));
     })
     team.url = 'sever/1.php';
     team.fetch({
     	success:function(collection,responest,options){
            collection.each(function(pars){
            	console.log(pars)
            })
     	},
     	error:function(collection,responest,options){
     		alert(collection)
     	}
     })
// 	var User = Backbone.Model.extend({
// 		abc:function(par){
// 	       alert(this.name);
// 		},
// 		name:null,
// 		initialize: function (name) {
//         this.set({name: name});
//     },
//     validate:function(name){
//         if(!name||name.length<3){
//         	return 'too short';
//         }
//     }
// 	},{
// 		wai:function(){
// 			console.log(this.name);
// 		}
// 	})

// 	Users = Backbone.Collection.extend({
// 		initialize:function(models,options){
// 			this.bind('add',options.view.addOneWord);
// 		},
// 		events:{
// 			"click #btn":"ckickIn"
// 		},
// 		ckickIn:function(){
//          var user_name = prompt('who are you');
//          if(user_name == '')user_name = 'undefined_wu';
//          var user = new User({name:user_name});
//          this.users.add(user);
// 		},
// 		addOneWord:function(model){
// 			$('#ul_list').append("<li>hello! <b>"+model.get('name')+"</b></li>");
// 		}
// 	})

// 	AppView = Backbone.View.extend({
// 		el:$('body'),
// 		initialize:function(){
// 			this.users = new Users(null,{view:this})
// 		}
// 	})
// 	var appview = new AppView;
// 	//var user = new User('na');

// // 	$('.btn').click(function(){
// // 		user.abc();
// // 		alert(user.get('name'));
// // 	})
// // 	user.set({name:'yu'})
// // 	alert(user.get('name'));
// // 	console.log(user.attributes)
// // 	user.bind('error', function (model, error) {
// //     console.log(model)
// // });
})($,_,Backbone)
