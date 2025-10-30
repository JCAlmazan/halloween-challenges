function translatePossessed (message: string): string {
  const reverseEachWord = (text: string): string => {
    return text.split(" ").map(m => [...m].reverse().join("")).join(" ");
  };

  return message.trim() ? reverseEachWord(message) : "";
}
