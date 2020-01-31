import json
import sys
import sqlite3


def get_json(file_name):
    with open(file_name) as f:
        json_data = f.read()
    json_obj = json.loads(json_data)
    return json_obj


'''
Inserts node objects from json into the note table. 
json node objects have 3 fields:
    - id
    - title
    - content
'''
def insert_nodes(nodes):
    conn = sqlite3.connect('../instance/flasknote.sqlite')
    c = conn.cursor()
    c.execute('DELETE FROM note')
    node_insert_strings = []
    for n in nodes:
        node_insert_strings.append(("0", n['title'], n['content']))
    # INSERT INTO note(user_id, title, content) VALUES (?,?,?)
    c.executemany('INSERT INTO note(user_id, title, content) VALUES (?,?,?)', node_insert_strings)
    conn.commit()
    conn.close()



'''
Inserts edge objects from json into the edge table.
json edge objects have 3 fields:
    - id
    - from
    - to
'''
def insert_edges(edges):
    conn = sqlite3.connect('../instance/flasknote.sqlite')
    c = conn.cursor()
    c.execute('DELETE FROM edge')
    edge_insert_strings = []
    for e in edges:
        edge_insert_strings.append(("0", e['from'], e['to']))
    # INSERT INTO edge(user_id, node_from, node_to) VALUES (?,?,?)
    c.executemany('INSERT INTO edge(user_id, node_from, node_to) VALUES (?,?,?)', edge_insert_strings)
    conn.commit()
    conn.close()


if __name__ == '__main__':
    print("loading in some test data .... ")
    if (len(sys.argv) != 2):
        raise Exception("wrong number of arguments!")
    
    file_name = sys.argv[1]
    file_name = "../data/" + file_name
    print("loading data from " + file_name)
    json_data = get_json(file_name)
    nodes = json_data['nodes']
    edges = json_data['edges']
    insert_nodes(nodes)
    insert_edges(edges)
