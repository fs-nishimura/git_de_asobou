if (type === "aligator") {
    aligatorBehavior();
} else if (type === "parrot") {
    parrotBehavior();
} else if (type === "dolphin") {
    dolphinBehavior();
} else if (type === "bulldog") {
    bulldogBehavior();
} else {
    throw new Error("Invalid animal " + type);
}

var types = {
    aligator: aligatorBehavior,
    parrot: parrotBehavior,
    dolphin: dolphinBehavior,
    bulldog: bulldogBehavior
};

var func = types[type];

if (!func) throw new Error("Invalid animal " + type);

func();