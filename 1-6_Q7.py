# PYTHON script
import os
import ansa

def main():
	group_member={'sawa':'red','tei':'black','nimiya':'blue','matsui':'pink','oshiro':'red','miyanohara':'black','furusawa':'blue'}
	
	'''
	以下のような出力が得られるようなプログラムを追記してください。
	出力の順番は問いません。
	nimiya = blue
	sawa = red
	furusawa = blue
	tei = black
	miyanohara = black
	oshiro = red
	matsui = pink
	
	black : 2
	blue : 2
	pink : 1
	red : 2
	'''
####空のディクショナリを作成_色の個数を数える用
	color_counter = {}


####for文でkey抽出。一緒にvalue抽出も出来るようになる
	for name in group_member:
#		print(name)
#		print(group_member[name])
		print(name + " = " +  group_member[name])
####変数を作り、valueの指示をしやすくする
		color = group_member[name]


####カウントさせるために初期値0の設定をする		
		if color not in color_counter:
			color_counter[color] = 0

####ディクショナリに色が追加されるとカウントをする指示			
		color_counter[color] += 1
	
#	print(color_counter)

#####返り値指示に改行があるため空っぽをprint
	print()
	
###指定の形で出力できるように指示	
	for i in color_counter:
		print(i, ":", color_counter[i])

if __name__ == '__main__':
	main()
