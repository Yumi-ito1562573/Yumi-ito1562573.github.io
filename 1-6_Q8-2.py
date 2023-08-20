def main():
	group_member={'sawa':'red','tei':'black','nimiya':'blue','matsui':'pink','oshiro':'red','miyanohara':'black','furusawa':'blue'}
	
	'''
	以下のような出力が得られるようなプログラムを追記してください。
	出力の順番は問いません。
 
	black = [2, ['tei', 'miyanohara']]
	blue = [2, ['nimiya', 'furusawa']]
	red = [2, ['oshiro', 'sawa']]
	pink = [1, ['matsui']]
	'''
 
 
	color = {}
	for name in group_member:
		colorname = group_member[name]
		if colorname not in color:
			color[colorname] = [0, []]
#ここに2行追加してください。

	for name,colorname in group_member.items():
    	color[colorname][0] += 1
    	color[colorname][1].append(name)
        
	print(color)
#ここに2行追加してください。

	
	for i in color:
		print(i, '=', color[i])
if __name__ == '__main__':
	main()
