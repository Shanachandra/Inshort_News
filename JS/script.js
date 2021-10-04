

async function getNewsData(value){ 

     if(document.getElementById('outerpart')!=null)
     {
        let element = document.getElementById("check");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        //res.removeChild(res);
        // document.getElementById('outercont').innerHTML='';
         
     }
    var url=`https://inshortsapi.vercel.app/news?category=${value}`
    
    let result=await fetch(url);
    let jsondata = await result.json();
    
    for(var i=1; i<jsondata.data.length;i++)
    {
        
        var outerpart=document.createElement('div')
        outerpart.setAttribute('id','outerpart')
        //div-->within 2 coln -->image and content
        var container=document.createElement('div')
        container.classList.add('container')
        container.setAttribute('id','outercont')
        var row=document.createElement('div')
        row.classList.add('row')
        row.setAttribute('id','rowelement')

        var col1=document.createElement('div')
        col1.classList.add('col-sm-12')
        col1.classList.add('col-md-12')
        col1.classList.add('col-lg-6')
        col1.classList.add('col1')
        var innerdiv1=document.createElement('div')
        innerdiv1.classList.add('innerdiv1')
        var innercont1=document.createElement('container')
        var innerrow1=document.createElement('div')
        innerrow1.classList.add('row')
        var innercol1col1=document.createElement('div')
        innercol1col1.classList.add('col-sm-4')
        innercol1col1.classList.add('col-md-4')
        innercol1col1.classList.add('col-lg-4')
        innercol1col1.classList.add('col1image')
        var img1=document.createElement('img')
        img1.setAttribute('src',jsondata.data[i].imageUrl)
        img1.classList.add('img1')
        img1.classList.add('img-responsive')
        img1.classList.add('fit-image')
        innercol1col1.append(img1)
        var innercol1col2=document.createElement('div')
        innercol1col2.classList.add('col-sm-8')
        innercol1col2.classList.add('col-md-8')
        innercol1col2.classList.add('col-lg-8')
        innercol1col2.classList.add('col1content')
        var contentdiv1=document.createElement('div')
        var contenth6=document.createElement('h6')
        contenth6.innerHTML=jsondata.data[i].title
        var spandate=document.createElement('span')
        spandate.setAttribute('id','spandateval')
        spandate.innerHTML=`<b>Short</b> by ${jsondata.data[i].author} / ${jsondata.data[i].time} on ${jsondata.data[i].date}`
        var para=document.createElement('p')
        para.innerHTML=jsondata.data[i].content
        var readmore=document.createElement('span')
        readmore.innerHTML=`<a href=${jsondata.data[i].readMoreUrl}>Read more</a>`
        contentdiv1.append(contenth6,spandate,para,readmore)

        innercol1col2.append(contentdiv1)
        innerrow1.append(innercol1col1,innercol1col2)
        innercont1.append(innerrow1)
        innerdiv1.append(innercont1)      
        col1.append(innerdiv1)  


        i=i+1;
        
        var col2=document.createElement('div')
        col2.classList.add('col-sm-12')
        col2.classList.add('col-md-12')
        col2.classList.add('col-lg-6')
        col2.classList.add('col2')
        var innerdiv2=document.createElement('div')
        innerdiv2.classList.add('innerdiv2')
        var innercont2=document.createElement('container')
        var innerrow2=document.createElement('div')
        innerrow2.classList.add('row')
        var innercol2col1=document.createElement('div')
        innercol2col1.classList.add('col-sm-4')
        innercol2col1.classList.add('col-md-4')
        innercol2col1.classList.add('col-lg-4')
        innercol2col1.classList.add('col2image')
        var img2=document.createElement('img')
        img2.setAttribute('src',jsondata?.data[i]?.imageUrl)
        
        img2.classList.add('img2')
        img2.classList.add('img-responsive')
        img2.classList.add('fit-image')
        innercol2col1.append(img2)
        var innercol2col2=document.createElement('div')
        innercol2col2.classList.add('col-sm-8')
        innercol2col2.classList.add('col-md-8')
        innercol2col2.classList.add('col-lg-8')
        innercol2col2.classList.add('col1content')
        var contentdiv1=document.createElement('div')
        var contenth6=document.createElement('h6')
        contenth6.innerHTML=jsondata.data[i]?.title
        var spandate1=document.createElement('span')
        spandate1.innerHTML=`<b>Short</b> by ${jsondata?.data[i]?.author} / ${jsondata?.data[i]?.time} on ${jsondata?.data[i]?.date}`
        var para1=document.createElement('p')
        para1.innerHTML=jsondata.data[i].content
        var readmore1=document.createElement('span')
        readmore1.innerHTML=`<a href=${jsondata.data[i].readMoreUrl}>Read more</a>`
        contentdiv1.append(contenth6,spandate1,para1,readmore1)
        innercol2col2.append(contentdiv1)
        
        innerrow2.append(innercol2col1,innercol2col2)
        innercont2.append(innerrow2)
        innerdiv2.append(innercont2)      
        col2.append(innerdiv2)  
        
        row.append(col1,col2)
        container.append(row)
        
        outerpart.append(container)
        
        
        // var div=document.createElement('div')
        // div.innerHTML=jsondata.data[i+1].author
        // div.classList.add('check')
        // document.body.append(div)
        var rep=document.getElementById('check')
        rep.append(outerpart)
       // document.body.append(outerpart)
        

    }
    console.log(jsondata)
}


