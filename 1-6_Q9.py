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
	fruits_dict = {}

	for name,fruit_list in fav_fruit_dict.items():
    	# print(name)
   	# print(fruit_list)
		for fruit in fruit_list:
			if fruit not in fruits_dict:
				fruits_dict[fruit] = []

			if fruit == "apple":
				fruits_dict["apple"].append(name)

			if fruit == "plum":
				fruits_dict["plum"].append(name)

			if fruit == "orange":
				fruits_dict["orange"].append(name)

			if fruit == "cherry":
				fruits_dict["cherry"].append(name)

			if fruit == "grape":
				fruits_dict["grape"].append(name)


	print("like apple" , len(fruits_dict["apple"]))
	print("like plum" , len(fruits_dict["plum"]))
	# print("like orange" , len(fruits_dict["orange"]))
	# print("like cherry" , len(fruits_dict["cherry"]))
	# print("like grape" , len(fruits_dict["grape"]))

	# print(fruits_dict)

	for i in fruits_dict:
		print(i, '=', fruits_dict[i])
 
if __name__ == '__main__':
	main()
