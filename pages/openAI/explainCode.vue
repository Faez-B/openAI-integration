<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="explain-code" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Explain a complicated piece of code.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                class Log:<br/>
                    def __init__(self, path):<br/>
                        dirname = os.path.dirname(path)<br/>
                        os.makedirs(dirname, exist_ok=True)<br/>
                        f = open(path, "a+")<br/>
                        <br/>
                        # Check that the file is newline-terminated<br/>
                        size = os.path.getsize(path)<br/>
                        if size > 0:<br/>
                            f.seek(size - 1)<br/>
                            end = f.read(1)<br/>
                            if end != "\n":<br/>
                                f.write("\n")<br/>
                        self.f = f<br/>
                        self.path = path<br/>
                        <br/>
                    def log(self, event):<br/>
                        event["_event_id"] = str(uuid.uuid4())<br/>
                        json.dump(event, self.f)<br/>
                        self.f.write("\n")<br/>
                        <br/>
                    def state(self):<br/>
                        state = {"complete": set(), "last": None}<br/>
                        for line in open(self.path):<br/>
                            event = json.loads(line)<br/>
                            if event["type"] == "submit" and event["success"]:<br/>
                                state["complete"].add(event["id"])<br/>
                                state["last"] = event<br/>
                        return state<br/>
                        <br/>
                """<br/>
                Here's what the above class is doing:<br/>
                1.  The constructor creates a directory for the log file if it doesn't exist.<br/>
                2.  The log() method writes a JSON-encoded event to the log file.<br/>
                3.  The state() method returns a dictionary with the set of complete tasks and the most recent event.<br/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .example {
        max-height: 35rem;
        overflow: auto;
    }
</style>