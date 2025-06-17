db = db.getSiblingDB('NEFLYCHAIN'); // Crea y usa la base de datos 'netflichan'
db.createUser({
  user: 'nf_gael',
  pwd: 'nf_123',
  roles: [
    {
      role: 'readWrite',
      db: 'NEFLYCHAIN'
    }
  ]
});
