package springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.model.User;
import springboot.repository.UserRepository;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	
	//get all Users
	@GetMapping("/users")
	public List<User> getUsers(){
		return this.userRepository.findAll();
	}
	
	//create a User
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
		
	}
	
	//find by ID
	@GetMapping("/users/{id}")
	public ResponseEntity<Optional<User>> getUserById(@PathVariable Long id) {
		Optional<User> user = userRepository.findById(id);
		return ResponseEntity.ok(user);
		
	}
	
	//update
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User userDetails){
		User user = userRepository.findById(id).orElseThrow();
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmail(userDetails.getEmail());
		
		User updateUser = userRepository.save(user);
	
		return ResponseEntity.ok(updateUser);
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		User user = userRepository.findById(id).orElseThrow();
		
		userRepository.delete(user);
		Map<String,Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return  ResponseEntity.ok(response);
		
		
	}
	
	
}






































