def calculate_score(option, weights):
    return (
        option.get("cost", 0) * weights.get("cost", 0) +
        option.get("growth", 0) * weights.get("growth", 0) -
        option.get("risk", 0) * weights.get("risk", 0) -
        option.get("time", 0) * weights.get("time", 0) +
        option.get("stability", 0) * weights.get("stability", 0)
    )

def rank_options(options, weights):
    for opt in options:
        opt["score"] = calculate_score(opt, weights)
    return sorted(options, key=lambda x: x["score"], reverse=True)

def process_query(data):
    message = data.get("message", "").lower()
    options = data.get("options", [])
    weights = data.get("weights", {})

    if not options:
        return "Please add options first."

    ranked = rank_options(options, weights)

    # BEST OPTION
    if "best" in message:
        best = ranked[0]
        return f"Best option is {best['name']} with score {best['score']:.2f}"

    # EXPLAIN
    elif "why" in message or "explain" in message:
        best = ranked[0]
        return (
            f"{best['name']} is best because it has strong growth and stability "
            f"with lower risk compared to others."
        )

    # COMPARE
    elif "compare" in message:
        text = "Comparison:\n"
        for o in ranked:
            text += f"{o['name']} → {o['score']:.2f}\n"
        return text

    # DEFAULT
    return "Ask me: best option, compare, or explain."