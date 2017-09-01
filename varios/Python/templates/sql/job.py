from mako.template import Template

mytemplate = Template(filename='./views/job.html')
print(mytemplate.render(Name="jack"))