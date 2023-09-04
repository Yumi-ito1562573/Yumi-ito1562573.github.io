import os
from collections import defaultdict
 
def main():
	fruits_price = {'apple':100,'orange':50,'cherry':300,'grape': 500,'plum':200}
	sanchi = {'apple':'aomori','grape':'aomori','orange':'ehime','plum':'yamagata','cherry':'yamagata'}
	best_before = {'apple':210120,'orange':210210,'cherry':210110,'grape': 210130,'plum':210120}
	orderdict = {'horiuchi': {'apple':11,'orange':0,'cherry':14,'grape':7,'plum':14},
				 'sano':{'apple':15,'orange':2,'cherry':1,'grape':20,'plum':10},
				 'suzuki':{'apple':1,'orange':20,'cherry':0,'grape':8,'plum':14},
				 'yamada':{'apple':4,'orange':17,'cherry':12,'grape':12,'plum':17},
				 'sugiyama':{'apple':18,'orange':13,'cherry':0,'grape':13,'plum':11},
				 'kuzuyama':{'apple':14,'orange':7,'cherry':9,'grape':13,'plum':9},
				 'phan':{'apple':15,'orange':2,'cherry':8,'grape':1,'plum':10},
				 'higuchi':{'apple':16,'orange':10,'cherry':13,'grape':7,'plum':12},
				 'ueda':{'apple':16,'orange':19,'cherry':5,'grape':18,'plum':3},
				 'saito':{'apple':20,'orange':9,'cherry':0,'grape':6,'plum':17},
				 'ohtsuka':{'apple':15,'orange':12,'cherry':10,'grape':11,'plum':12},
				 'kikuchi':{'apple':10,'orange':13,'cherry':8,'grape':18,'plum':9},
				 'yamamoto':{'apple':7,'orange':9,'cherry':18,'grape':14,'plum':11},
				 'shinkai':{'apple':7,'orange':0,'cherry':6,'grape':16,'plum':19},
				 'sawa':{'apple':13,'orange':7,'cherry':0,'grape':20,'plum':16}}
	'''
	fruits_price: 果物の値段
	sanchi: 果物の仕入れ先（県名）
	best_before: 消費期限
	orderdict: 注文リスト
 
	[1]それぞれの果物の注文総数と金額を出してください。
	[2]仕入れ先（県）ごとに何をいくつ注文しますか？それぞれの金額小計と全部の合計も算出してください。
	[3]消費期限が一番近い（日付が若い）果物を注文した人をリストアップしてください。
 
	'''
	fruit_dict = {}

	for name,orderdictvalue in orderdict.items():
    		for fruit,num in orderdictvalue.items():
        		if fruit not in fruit_dict:
            			fruit_dict[fruit] = []
            			# print(fruit_dict)
        		if fruit == "apple":
            			fruit_dict["apple"].append(num)
        		elif fruit == "orange":
            			fruit_dict["orange"].append(num)
        		elif fruit == "cherry":
            			fruit_dict["cherry"].append(num)
        		elif fruit == "grape":
            			fruit_dict["grape"].append(num)
        		elif fruit == "plum":
            			fruit_dict["plum"].append(num)

	# print(fruit_dict)

	total_apple = 0
	total_orange = 0

	for i in fruit_dict["apple"]:
		total_apple = total_apple + i
	for i in fruit_dict["orange"]:
		total_orange = total_orange + i
	print("total_apple =" , total_apple)
	print("total_orange =" , total_orange) 
 
if __name__ == '__main__':
	main()
