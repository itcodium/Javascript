from mako.template import Template

list=("one aa", "two bb", "three cc")
mytemplate = Template(filename='./views/index.html')
print(mytemplate.render(time="jack",list=list))



properties = {'fname': "string", 'lname': "string", 'email': "string"}

methods= [ {'method': {"verbo":"get","value":"search"} ,
			"parameters":{"- name":"user",
						  "  in":"query",
						  "  required":"false",
						  "  type":"string" }
			}, 
            { 'method': {"verbo":"put","value":"insert"} ,
          	"  parameters":{"- name":"user",
          					"  in":"body",
          					"  required":"true"}}]


swagger = Template(filename='./views/swagger.yaml')
print(swagger.render(object="user",properties=properties,methods=methods))
       



'''

http://docs.makotemplates.org/en/latest/usage.html
http://docs.makotemplates.org/en/latest/syntax.html#python-blocks

for value  in methods:
	print(value['method']["verbo"])
	for  svalue in sorted(value['parameters'], key=value['parameters'].__getitem__,reverse=True):
		print (svalue, value['parameters'][svalue])
 

''' 

 
