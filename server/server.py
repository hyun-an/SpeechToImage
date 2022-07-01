from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import replicate
import json

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_time():
  return {
    "result": "API is working properly"
  }

model = replicate.models.get("borisdayma/dalle-mini")
@app.route('/getimg', methods = ['POST'])
def get_links():
  result = model.predict(prompt=request.json['queryText'], n_predictions=1)
  return jsonify({'output_link': result[0]})
  
if __name__=='__main__':
  app.run(debug=True)



"""
example response
Python 3.9.13 (main, May 24 2022, 21:13:51)
[Clang 13.1.6 (clang-1316.0.21.2)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import replicate
>>> model = replicate.models.get("borisdayma/dalle-mini")
>>> model.predict(prompt="sunset over a lake in the mountains")
[{'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/2be7b399-6cb8-4422-8447-b2607cd8d34a/output_0.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/d5cc22f9-2777-4168-b1ec-292c29c4ef74/output_1.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/dede6150-a055-4295-9b10-1918b2ac0e52/output_2.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/10babd5b-5daf-4988-a68c-7ac29bff076b/output_3.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/17372330-8cbc-4448-81bb-29d6369ebe81/output_4.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/0f277ce5-1dfd-4fb6-97e4-b3c071a99333/output_5.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/3f31190a-cc14-46a6-a371-54721b0f55af/output_6.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/064c1919-24a2-4c83-9739-4e3bdb581bcc/output_7.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/75d3fb04-803b-45d4-ae69-0988bdc5fdeb/output_8.png'}]
>>> result = model.predict(prompt="sunset over a lake in the mountains")
>>> result
[{'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/a112f936-6c58-4658-9a6a-33087d58c175/output_0.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/ded1febf-1b20-4086-84ba-d50233f3d67f/output_1.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/27844adf-0771-4fed-93b4-bfc0c3df42c6/output_2.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/e63df97b-6c60-4b46-994d-09368cd0b544/output_3.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/6b809860-0c02-4449-b49b-f432d7de9578/output_4.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/61ab7eed-3a4d-4aa0-90e5-ca05ce52b1bc/output_5.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/98b02edf-48ad-49bd-8bb3-0b2422e1115f/output_6.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/d154d82c-860e-4053-8aa1-5b563bfa4dc3/output_7.png'}, {'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/607aed9a-0f87-4b80-ba72-7bacd990f44c/output_8.png'}]
>>> result = model.predict(prompt="sunset over a lake in the mountains",n_predictions=1)
>>> result
[{'image': 'https://replicate.com/api/models/borisdayma/dalle-mini/files/7f987d1c-a6c2-4236-a761-6b3b685385d4/output_0.png'}]
"""
