class Activity(object):
    def __init__(self, type, reps, id, totalTime, weight):
        self.type = type
        self.reps = reps
        self.id = id
        self.totalTime = totalTime
        self.weight = weight

    def to_json(self):
        return {
            "type": self.type,
            "reps": self.reps,
            "id": self.id,
            "totalTime": self.totalTime,
            "weight": self.weight
        }
