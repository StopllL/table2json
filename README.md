# table2json
table data to json data

***
## 使用方法

	// html
	<script src='./table2json.js'></script>
	<table>
		<tr>
			<td>StopllL</td>
			<td>mganxiaolei@gmail.com</td>
			<td>https://github.com/StopllL</td>
		</tr>
		<tr>
			<td>StopllL</td>
			<td>mganxiaolei@gmail.com</td>
			<td>https://github.com/StopllL</td>
		</tr>
	</table>

	// js
	var t2j = new T2j({
			tr:'tr',
			td:'td',
			jsonKeys:['name','email','github']
		})
	t2j.getJson(); 
	// 转换结果 
    [
		{"name":"StopllL","email":"mganxiaolei@gmail.com","github":"https://github.com/StopllL"},
		{"name":"StopllL","email":"mganxiaolei@gmail.com","github":"https://github.com/StopllL"}
	]

	
***
## 参数

	tr			==>	行标识（类名，ID，标签名）
	td			==>	单元格标识（类名，ID，标签名）
	trB		==>	行起始，默认为第一行开始
	trC		==>	行终止，默认为最后一行结束
	tdB		==>	列起始，默认为第一列开始
	tdC		==>	列终止，默认为最后一列结束
	jsonKeys 	==>	转换对应的json格式的键名


***
## 方法

	getJson()			==>	该方法会返回一个转换为json的值


***
## Attention

  元素选择器采用document.querySelector()方法，兼容性也受限document.querySelector；
  jsonKeys为数组类型，长度不超过所转列数，超出的为undefined；
