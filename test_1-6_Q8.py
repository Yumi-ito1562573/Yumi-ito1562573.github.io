# PYTHON script
import os
import ansa

def main():
	color = {}
	black = [ 'tei', 'miyanohara']
	pink =  ['matsui']
	blue =  ['nimiya', 'furusawa']
	red = ['oshiro', 'sawa']
	color ['black'] = [2, black]
	color['pink'] = [1, pink]
	color['blue'] = [2, blue]
	color['red'] = [2, red]
#	print(color)
	for i in color:
		print(i, '=', color[i])
 
	color = {'black': [2, ['tei', 'miyanohara']], 'blue':[2, ['nimiya', 'furusawa']], 'red':[2, ['oshiro', 'sawa']], 'pink':[1, ['matsui']]}
	print()
	for i in color:
		print(i, '=', color[i])
		
 ##########################################################
 
	color = {}
	color['black'] = [0, []]
	color['black'][0] = 0
	color['black'][0] += 1
	color['black'][0] += 1
	color['black'][1].append('tei')
	color['black'][1].append('miyanoyara')
	#ここにプログラムを追加し、上と同じ結果が表示されるようにしてください。出力順番は問いません。

	color['blue'] = [0, []]
	color['blue'][0] = 0
	color['blue'][0] += 1
	color['blue'][0] += 1
	color['blue'][1].append('nimiya')
	color['blue'][1].append('furusawa')

	color['red'] = [0, []]
	color['red'][0] = 0
	color['red'][0] += 1
	color['red'][0] += 1
	color['red'][1].append('oshiro')
	color['red'][1].append('sawa')

	color['pink'] = [0, []]
	color['pink'][0] = 0
	color['pink'][0] += 1
	color['pink'][1].append('matsui')


	#ここにプログラムを追加し、上と同じ結果が表示されるようにしてください。出力順番は問いません。	
	
	print()
	for i in color:
		print(i, '=', color[i])


if __name__ == '__main__':
	main()
