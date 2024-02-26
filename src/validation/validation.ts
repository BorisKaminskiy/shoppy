export const VALIDATION = {
	validateEmail: (email: string): boolean => {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(email);
	} 
}