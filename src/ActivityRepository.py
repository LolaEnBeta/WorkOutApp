import sqlite3
from activity import Activity

def create(activity):
    conn = sqlite3.connect("sqlite3/database.db")
    query = conn.cursor()

    arguments = (
        activity.type,
        activity.reps,
        activity.id_act,
        activity.totalTime,
        activity.weight
    )

    sql = '''
        INSERT INTO activities (type, reps, id_act, totalTime, weight)
        VALUES (?, ?, ?, ?, ?)
    '''

    if (query.execute(sql, arguments)):
        query.close()
        conn.commit()
        conn.close()
        return "Activity created successfully"
    else:
        return "An error has ocurred"
