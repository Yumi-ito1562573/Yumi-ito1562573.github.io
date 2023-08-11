import os
from collections import defaultdict
 
def main():
	fav_fruit_dict = {'horiuchi': ['apple','orange'],
				 'sano':['apple','cherry','grape'],
				 'suzuki':['orange','cherry','grape'],
				 'yamada':['orange','cherry','grape','plum'],
				 'sugiyama':['apple','plum'],
				 'kuzuyama':['cherry'],
				 'phan':['apple','grape'],
				 'higuchi':['apple','orange','cherry','plum'],
				 'ueda':['apple','orange'],
				 'saito':['apple','orange','cherry'],
				 'ohtsuka':['orange','plum'],
				 'kikuchi':['apple','grape','orange'],
				 'yamamoto':['apple','orange','cherry','grape','plum'],
				 'shinkai':['apple','orange','cherry','grape','plum'],
				 'sawa':['apple','orange','grape','plum']}
	'''
	好きなフルーツのアンケート調査結果をfav_fruit_dictとして得ました。
	[1] 'apple'が好きな人は何人いますか？
	[2] 'plum'が好きな人は誰ですか？
	[3] フルーツをkey（ラベル）、好きな人のリストをvalue（中身）となるdictionary
		（ラベル付き引き出し）を作ってみましょう。
	'''
 
 
if __name__ == '__main__':
	main()
