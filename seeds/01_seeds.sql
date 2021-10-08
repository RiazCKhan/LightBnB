INSERT INTO users VALUES
(1, 'Max Payne', 'maxp@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
(2, 'James Bond', 'james007p@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
(3, 'Sean Combs', 'jayzp@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
(4, 'Lara Croft', 'tombraiderp@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
(5, 'Princess Peach', 'link@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
(6, 'Wonder Woman', 'ww@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
(7, 'Bruce Wayne', 'batman@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
(8, 'Sonya Blade', 'mk@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties VALUES
(1, 1, 'Pain Retreat', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 259, 1, 1.5, 2, 'Canada', '12 Pain Ave', 'Toronto', 'ON', 'Q1Q 2W2', true),
(2, 2, 'MI6', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 2069, 5, 4, 10, 'Canada', '1 Hiddenway Blvd', 'Toronto', 'ON', 'M1M 6M6', true),
(3, 3, 'The Throne', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 5023, 10, 10, 15, 'Canada', '200 Throne Rd', 'Toronto', 'ON', 'J46 7B7', true),
(4, 4, 'The Tomb', 'description', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 6093, 12, 7, 13, 'Canada', '17 Tomb Path Cres', 'Toronto', 'ON', 'T0T 8X8', true),
(5, 5, 'Castle', 'description', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg', 6093, 12, 7, 13, 'Canada', '11 Castle Path Cres', 'Toronto', 'ON', 'T0T 8X8', true),
(6, 6, 'Bablyon', 'description', 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg', 149, 2, 4, 6, 'Canada', '98 Stone Rd', 'Toronto', 'ON', 'S7S 4F3', true),
(7, 7, 'The Bat Cave', 'description', 'https://images.pexels.com/photos/2076739/pexels-photo-2076739.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2076739/pexels-photo-2076739.jpeg', 999, 3, 7, 12, 'Canada', '58 Estate Blvd', 'Toronto', 'ON', 'B5B 1M1', true),
(8, 8, 'Mortal Kombat', 'description', 'https://images.pexels.com/photos/1756826/pexels-photo-1756826.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1756826/pexels-photo-1756826.jpeg', 89, 1, 1, 1, 'Canada', '69 Underworld Cres', 'Toronto', 'ON', 'P3P 2J2', true);

INSERT INTO reservations VALUES
(1, '2018-09-11', '2018-09-26', 1, 8),
(2, '2019-01-04', '2019-02-01', 2, 7),
(3, '2021-10-01', '2021-10-14', 3, 6),
(4, '2014-10-21', '2014-10-21', 4, 5),
(5, '2016-07-17', '2016-08-01', 5, 4),
(6, '2018-05-01', '2018-05-27', 6, 3),
(7, '2022-10-04', '2022-10-23', 7, 2),
(8, '2015-09-13', '2015-09-30', 8, 1),
(9, '2023-05-27', '2023-05-28', 1, 8),
(10, '2023-04-23', '2023-05-02', 2, 3);

INSERT INTO property_reviews VALUES
  (1, 8, 3, 10, 4, 'messages'),
  (2, 7, 4, 9, 5, 'messages'),
  (3, 6, 5, 8, 3, 'messages'),
  (4, 5, 6, 7, 2, 'messages'),
  (5, 4, 2, 3, 5, 'messages'),
  (6, 1, 1, 5, 3, 'messages'),
  (7, 3, 8, 4, 5, 'messages');
