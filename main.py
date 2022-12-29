import requests
import json
from bs4 import BeautifulSoup, SoupStrainer
from bs4.diagnose import diagnose

envValue = requests.get('https://workers.flatironopensource.ml/course/se-prep')
phaseValue = json.loads(envValue.content)

moduleList = {}

moduleList["title"] = phaseValue["title"]
# Create a "modules" key in the dictionary
moduleList["modules"] = []
# Loop through the modules in the phaseValue and add them to the moduleList modules key
for modules in phaseValue["modules"]:
    # Create a "module" dictionary
    module = {}
    # Add the name of the module to the module dictionary
    module["name"] = modules["name"]
    # Create an "items" key in the module dictionary
    module["items"] = []
    # Loop through the items in the modules and add them to the module items key
    for item1 in modules["items"]:
        # Create an "item" dictionary
        item = {}
        # Add the title of the item to the item dictionary
        item["title"] = item1["title"]
        # Try to get the content of the item
        try:
            # Create a soup object from the content
            soup = BeautifulSoup(item1["content"], 'html.parser')
        except:
            print("flatironschool.ml")
        # Loop through the links in the soup object
        for link in soup.find_all('a'):
            # Add the link to the item links key
            item["content"]=link.get('href')
            break
        # Add the item to the module items key
        module["items"].append(item)
    # Add the module to the moduleList modules key
    moduleList["modules"].append(module)



json_object = json.dumps(moduleList, indent=4)
# print(json_object)

with open("/Users/hope/Desktop/Project/FlatironSchoolOpenSource/src/data/newOutput/se-prep.json", "w") as outfile:
    outfile.write(json_object)