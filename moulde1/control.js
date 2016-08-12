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
     //        alert(3)
     //         console.log('responest')
     // 	}
     // },{error:function(){
     //        alert(1)
     //    }})
     // man.fetch({
     //     success:function(model,responest){
     //         console.log('responest')
     // 	}
     // })
     var Team = Backbone.Collection.extend({
     	model:Man
     })
     var person1 = new Man({name:'tom'});
     var person2 = new Man({name:'lucky'});
     var person3 = new Man({name:'jack'});
     var team = new Team([person1,person2,person3]);
     var showAll = function(){
        team.each(function(par){
            //alert(par.get('name'))
            console.log(par)
        })
     }
     team.bind('reset',showAll);
     team.url = 'sever/1.php';
     team.fetch({
        reset:true,
        success:function(collection,responest,options){
            console.log(options)
            responest = eval(responest)
            responest.forEach(function(pars){
                console.log('save:'+pars.name)
            })
        },
        error:function(collection,responest,options){
           // alert(collection)
        }
     })
     //路由router
     var appRouter = Backbone.Router.extend({
        routes:{
            "posts/:id" : "getPost",
             //下面对应的链接为<a href="#/download/user/images/hey.gif">download gif</a>
            "download/*path": "downloadFile",
            "manual": "manual",
             "*actions":"defaultsRouter",
             
             ":route/:action": "loadView",

        },
        getPost: function(id) {
       // alert(id);
        },
        defaultsRouter:function(def){
            alert(def)
        },
        downloadFile:function(dd){
            alert(dd);
        },
        loadView:function(gg){
            alert(gg)
        },
        manual: function() {
            alert("call manual");
            new_router.navigate("/posts/" + 404, {trigger: true, replace: true});
        }
     })
     var new_router = new appRouter;
     Backbone.history.start();
    
    //视图view
    var SearchView = Backbone.View.extend({
        el:"#search_container",
        initialize: function(){
            //alert('init a SearchView');
            this.render({search_label:"搜索结果"})
           },
         render: function(context) {
        //使用underscore这个库，来编译模板
        var template = _.template($("#search_template").html());
        //加载模板到对应的el属性中
        $(this.el).html(template(context));
        },
        events:{
            "click input[type=button]":"seachButton"
        },
        seachButton:function(e){
            alert("search for " + $("#search_input").val());
        }
    });
    var searchView = new SearchView();
   
      // team.remove(person3);
     // team.add(person3);
     // team.each(function(pars){
     //     console.log(pars.get('name'));
     // })
     // team.url = 'sever/1.php';
     // team.fetch({
     	// success:function(collection,responest,options){
      //     //  console.log(collection)
      //       collection.each(function(pars){
      //           console.log(pars.get('age'))
      //       })
      //   },
      //   error:function(collection,responest,options){
      //       alert(collection)
      //   }
     // })
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
